import { GalleryHorizontalEnd, Home, PackageOpen, WalletCards } from "lucide-react";

const commonActions = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Packs",
        url: "/packs",
        icon: PackageOpen
    },
    {
        title: "All Cards",
        url: "/cards",
        icon: GalleryHorizontalEnd
    },
    {
        title: "Decks",
        url: "/decks",
        icon: WalletCards
    }
];

const adminActions = [];

export { commonActions, adminActions };