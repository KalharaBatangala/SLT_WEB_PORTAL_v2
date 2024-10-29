export interface AccountDetails {
  accountno: string;
  status: string;
  telephoneno: string;
}

export interface Service {
  serviceID: string;
  packageName: string;
  serviceStatus: string;
  serviceType: string;
  updatedDTM: string;
}

export interface ServiceDetailsAPIResponse {
  accountCategory: string;
  accountNo: string;
  contactMobile: string;
  contactNamewithInit: string;
  listofBBService: Service[];
  listofPEOService: Service[];
  listofVoiceService: Service[];
  promotionName: string;
  promotionType: string;
}

export interface BroadbandPrepaidMainPackageDetails {
  OFFERING_ID: string;
  MYSLT_PKG_NAME: string;
  PRICE_LKR_WITH_TAX: number;
  DATA_VOLUME_GB?: string;
  VALIDITY?: number;
}

export interface BroadbandPrepaidAddOnPackageDetails {
  OFFERING_ID: string;
  ADDON_NAME: string;
  PRICE_LKR_WITH_TAX: number;
  DATA_VOLUME_GB?: string;
  VALIDITY?: number;
}

// export interface WalletDetails {
//   balanceType: string;
//   balanceTypeName: string;
//   totalAmount: string;
//   balanceDetail: BalanceDetail[];
// }

export interface BalanceDetail {
  instanceId: string;
  amount: number;
  initialAmount: number;
  effectiveTime: string;
  expireTime: string;
  originalType: string;
  originalId: string;
}