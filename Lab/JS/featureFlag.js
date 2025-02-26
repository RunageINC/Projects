function ff(cbFunction, rejectFunction) {
  const canApplyCode = featureflagApiCall();

  if (canApplyCode) {
    cbFunction();

    return;
  }

  rejectFunction();
}

function featureflagApiCall() {
  // chama a api do fury
  return false;
}

function runThisCode() {
  console.log("codigo 1");
}

function runThisOtherCode() {
  console.log("codigo 2");
}

function allowIps() {
  const canApply = featureflagApiCall();

  ff(runThisCode, runThisOtherCode);
}

allowIps();
