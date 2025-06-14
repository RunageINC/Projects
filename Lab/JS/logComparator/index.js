import awsLogs from "./logs-insights-results.json" with { type: "json" };
import { writeFileSync } from "fs";

const errorLogs = [
  "ACCESS_NOT_GRANTED",
  "INSTANT_MATCH_FAILED",
  "INSUFFICIENT_CREDENTIALS",
  "INVALID_CREDENTIALS",
  "INVALID_MFA",
  "INVALID_OTP",
  "INVALID_PHONE_NUMBER",
  "INVALID_SEND_METHOD",
  "INVALID_UPDATED_USERNAME",
  "ITEM_CONCURRENTLY_DELETED",
  "ITEM_LOCKED",
  "ITEM_LOGIN_REQUIRED",
  "ITEM_NOT_FOUND",
  "ITEM_NOT_SUPPORTED",
  "MFA_NOT_SUPPORTED",
  "NO_ACCOUNTS",
  "NO_AUTH_ACCOUNTS",
  "no-depository-accounts",
  "NO_INVESTMENT_ACCOUNTS",
  "NO_INVESTMENT_AUTH_ACCOUNTS",
  "NO_LIABILITY_ACCOUNTS",
  "PASSWORD_RESET_REQUIRED",
  "PRODUCT_NOT_ENABLED",
  "PRODUCT_NOT_READY",
  "PRODUCTS_NOT_SUPPORTED",
  "USER_INPUT_TIMEOUT",
  "USER_SETUP_REQUIRED",
  "INSTITUTION_DOWN",
  "INSTITUTION_NO_LONGER_SUPPORTED",
  "INSTITUTION_NOT_AVAILABLE",
  "INSTITUTION_NOT_ENABLED_IN_ENVIRONMENT",
  "INSTITUTION_NOT_RESPONDING",
  "INSTITUTION_REGISTRATION_REQUIRED",
  "UNAUTHORIZED_INSTITUTION",
  "UNSUPPORTED_RESPONSE",
  "INTERNAL_SERVER_ERROR",
  "plaid-internal-error",
  "PLANNED_MAINTENANCE",
  "DATA_UNAVAILABLE",
  "ASSET_REPORT_GENERATION_FAILED",
  "INVALID_PARENT",
  "INSIGHTS_NOT_ENABLED",
  "INSIGHTS_PREVIOUSLY_NOT_ENABLED",
  "DATA_QUALITY_CHECK_FAILED",
  "PAYMENT_BLOCKED",
  "PAYMENT_CANCELLED",
  "PAYMENT_INSUFFICIENT_FUNDS",
  "PAYMENT_INVALID_RECIPIENT",
  "PAYMENT_INVALID_REFERENCE",
  "PAYMENT_INVALID_SCHEDULE",
  "PAYMENT_REJECTED",
  "PAYMENT_SCHEME_NOT_SUPPORTED",
  "PAYMENT_CONSENT_INVALID_CONSTRAINTS",
  "PAYMENT_CONSENT_CANCELLED",
  "TRANSACTION_INSUFFICIENT_FUNDS",
  "TRANSACTION_AMOUNT_EXCEEDED",
  "TRANSACTION_ON_SAME_ACCOUNT",
  "TRANSACTION_CURRENCY_MISMATCH",
  "TRANSACTION_IBAN_INVALID",
  "TRANSACTION_BACS_INVALID",
  "TRANSACTION_FAST_PAY_DISABLED",
  "TRANSACTION_EXECUTION_FAILED",
  "NONIDENTICAL_REQUEST",
  "REQUEST_CONFLICT",
  "TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION",
  "TRANSFER_LIMIT_REACHED",
  "TRANSFER_ACCOUNT_BLOCKED",
  "TRANSFER_NOT_CANCELLABLE",
  "TRANSFER_UNSUPPORTED_ACCOUNT_TYPE",
  "TRANSFER_FORBIDDEN_ACH_CLASS",
  "TRANSFER_UI_UNAUTHORIZED",
  "TRANSFER_ORIGINATOR_NOT_FOUND",
  "INCOMPLETE_CUSTOMER_ONBOARDING",
  "UNAUTHORIZED_ACCESS",
  "INCOME_VERIFICATION_DOCUMENT_NOT_FOUND",
  "INCOME_VERIFICATION_FAILED",
  "INCOME_VERIFICATION_NOT_FOUND",
  "INCOME_VERIFICATION_UPLOAD_ERROR",
  "VERIFICATION_STATUS_PENDING_APPROVAL",
  "EMPLOYMENT_NOT_FOUND",
  "SANDBOX_PRODUCT_NOT_ENABLED",
  "SANDBOX_WEBHOOK_INVALID",
  "SANDBOX_TRANSFER_EVENT_TRANSITION_INVALID",
  "MISSING_FIELDS",
  "UNKNOWN_FIELDS",
  "INVALID_FIELD",
  "INVALID_CONFIGURATION",
  "INCOMPATIBLE_API_VERSION",
  "INVALID_BODY",
  "INVALID_HEADERS",
  "NOT_FOUND",
  "NO_LONGER_AVAILABLE",
  "SANDBOX_ONLY",
  "INVALID_ACCOUNT_NUMBER",
  "ADDITIONAL_CONSENT_REQUIRED",
  "DIRECT_INTEGRATION_NOT_ENABLED",
  "INCORRECT_DEPOSIT_VERIFICATION",
  "INVALID_ACCESS_TOKEN",
  "INVALID_ACCOUNT_ID",
  "INVALID_API_KEYS",
  "INVALID_AUDIT_COPY_TOKEN",
  "INVALID_INSTITUTION",
  "INVALID_LINK_CUSTOMIZATION",
  "INVALID_PROCESSOR_TOKEN",
  "INVALID_PRODUCT",
  "INVALID_PUBLIC_TOKEN",
  "INVALID_LINK_TOKEN",
  "INVALID_STRIPE_ACCOUNT",
  "INVALID_USER_TOKEN",
  "INVALID_WEBHOOK_VERIFICATION_KEY_ID",
  "UNAUTHORIZED_ENVIRONMENT",
  "UNAUTHORIZED_ROUTE_ACCESS",
  "USER_PERMISSION_REVOKED",
  "TOO_MANY_VERIFICATION_ATTEMPTS",
  "PLAID_DIRECT_ITEM_IMPORT_RETURNED_INVALID_MFA",
  "ACCOUNTS_LIMIT",
  "ACCOUNTS_BALANCE_GET_LIMIT",
  "AUTH_LIMIT",
  "BALANCE_LIMIT",
  "CREDITS_EXHAUSTED",
  "IDENTITY_LIMIT",
  "INSTITUTIONS_GET_LIMIT",
  "INSTITUTIONS_GET_BY_ID_LIMIT",
  "INSTITUTION_RATE_LIMIT",
  "INVESTMENT_HOLDINGS_GET_LIMIT",
  "INVESTMENT_TRANSACTIONS_LIMIT",
  "ITEM_GET_LIMIT",
  "RATE_LIMIT",
  "TRANSACTIONS_LIMIT",
  "TRANSACTIONS_SYNC_LIMIT",
  "RECAPTCHA_REQUIRED",
  "RECAPTCHA_BAD",
  "INCORRECT_OAUTH_NONCE",
  "INCORRECT_LINK_TOKEN",
  "OAUTH_STATE_ID_ALREADY_PROCESSED",
  "OAUTH_STATE_ID_NOT_FOUND",
  "BANK_TRANSFER_ACCOUNT_BLOCKED",
  "CUSTOMER_NOT_FOUND",
  "FLOWDOWN_NOT_COMPLETE",
  "QUESTIONNAIRE_NOT_COMPLETE",
  "CUSTOMER_NOT_READY_FOR_ENABLEMENT",
  "CUSTOMER_ALREADY_ENABLED",
  "CUSTOMER_ALREADY_CREATED",
  "LOGO_REQUIRED",
  "INVALID_LOGO",
  "CONTACT_REQUIRED",
  "ASSETS_UNDER_MANAGEMENT_REQUIRED",
  "CUSTOMER_REMOVAL_NOT_ALLOWED",
  "CONSUMER_REPORT_EXPIRED",
  "INSTITUTION_TRANSACTION_HISTORY_NOT_SUPPORTED",
  "INSUFFICIENT_TRANSACTION_DATA",
  "NETWORK_CONSENT_REQUIRED",
];

const regex = "/" + errorLogs.join("|") + "/i";

const mapResult = {};

const workProperty = (prop) => {
  if (mapResult[prop]) {
    mapResult[prop].count = (mapResult[prop].count || 0) + 1;
  } else {
    mapResult[prop] = {
      count: 1,
      errorMessages: [],
    };
  }
};

awsLogs.forEach((log) => {
  const response = log["@message"].response;
  const message = log["@message"].logs;
  const handler =
    log["@message"].handler ||
    `lambda-${log["@message"].lambda || "not-identified"}`;

  if (response) {
    const plaidError = response?.plaidErrorCode;
    const plaidErrorObject = response?.plaidError;
    const sardineError = response?.sardineVerificationResult?.plaidError;

    if (plaidError) {
      workProperty(plaidError);

      if (plaidErrorObject) {
        mapResult[plaidError].errorMessages = [
          ...(mapResult[plaidError].errorMessages || []),
          plaidErrorObject.error_message,
        ];
      } else if (sardineError) {
        mapResult[plaidError].errorMessages = [
          ...(mapResult[plaidError].errorMessages || []),
          sardineError.error_message,
        ];
      }
    } else {
      const error = JSON.parse(response.errorMessage);

      const errorCode = error.error_code;
      const errorMessage = error.error_message;

      workProperty(errorCode);

      mapResult[errorCode].errorMessages = [
        ...(mapResult[errorCode].errorMessages || []),
        errorMessage,
      ];
    }
  } else {
    message.forEach((msg) => {
      if (msg.match(regex)) {
        const errorCode = msg.match(regex)[0];
        mapResult[errorCode] = {
          count: (mapResult[errorCode]?.count || 0) + 1,
          errorMessages: [...(mapResult[errorCode]?.errorMessages || []), msg],
        };
      }
    });
  }
});

await writeFileSync(
  "./log-comparator.json",
  JSON.stringify(mapResult, null, 2)
);

console.log("mapResult", mapResult);
