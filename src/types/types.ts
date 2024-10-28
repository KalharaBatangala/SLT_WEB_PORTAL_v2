// In types.ts

import { Key, ReactNode } from "react";

// Example definition for AccountDetails
export interface AccountDetails {
  accountId: string;
  accountName: string;
  accountType: string;
  balance: number;
  // Add other fields as necessary
}

// Example definition for BroadbandPrepaidAddOnPackageDetails
export interface BroadbandPrepaidAddOnPackageDetails {
  VALIDITY: ReactNode;
  PRICE_LKR_WITH_TAX: ReactNode;
  DATA_VOLUME_GB: ReactNode;
  ADDON_NAME: ReactNode;
  OFFERING_ID: Key | null | undefined;
  packageId: string;
  packageName: string;
  packagePrice: number;
  // Add other fields as necessary
}

// Example definition for BroadbandPrepaidMainPackageDetails
export interface BroadbandPrepaidMainPackageDetails {
  MYSLT_PKG_NAME: ReactNode;
  VALIDITY: ReactNode;
  PRICE_LKR_WITH_TAX: ReactNode;
  DATA_VOLUME_GB: ReactNode;
  mainPackageId: string;
  mainPackageName: string;
  mainPackagePrice: number;
  // Add other fields as necessary
}

// Ensure your existing types are also exported
export interface BalanceDetail {
  instanceId: string;
  amount: number;
  initialAmount: number;
  effectiveTime: string;
  expireTime: string;
  originalType: string;
  originalId: string;
}

export interface DataBundle {
  balanceType: string;
  balanceTypeName: string;
  totalAmount: string;
  reservedAmount: string;
  depositFlag: string;
  refundFlag: string;
  currencyId: string;
  balanceDetail: BalanceDetail[];
}

export interface ServiceDetailsAPIResponse {
  freeUnitDetail: ServiceDetailsAPIResponse | null;
  isSuccess: boolean;
  errorMessege: string | null;
  exceptionDetail: string | null;
  dataBundle: DataBundle[];
  errorShow: string | null;
  errorCode: string | null;
  walletDetail?: any; // Adjust this type according to your needs
  promotionType?: string; // Include the promotionType
}
