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
  errorMessage: string;
  isSuccess: ServiceDetailsAPIResponse | null;
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
  OFFERING_NAME: string;
  MYSLT_PKG_NAME: string;
  PRICE_LKR_WITH_TAX: number;
  DATA_VOLUME_GB?: string;
  VALIDITY?: number;
}

export interface BroadbandPrepaidAddOnPackageDetails {
  OFFERING_ID: string;
  OFFERING_NAME: string;
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

export interface DataBalance {
  initialAmount: string;
  currentAmount: string;
  effectiveTime: string;
  expireTime: string;
  packageName: string;
  packageCategory: string;
}

export interface Transaction {
  id: string;
    subscriberNo: string;
    txnId: string;
    txnAmount: string;
    txnTime: string; // Original format: YYYYMMDDHHMMSS
    statusCode: string;
}

export interface BillingInquiry {
  billAmount: string;
  lastBillDate: string;
  paymentDueDate: string;
  lastPaymentDate: string;
  lastPaymentAmount: string;
  outstandingBalance: string;
}

export interface BillPaymentAPIResponse {
  isSuccess: boolean;
  errorMessage: string | null;
  exceptionDetail: string | null;
  dataBundle: {
    listofbillingInquiryType: BillingInquiry[];
  };
  errorShow: string | null;
  errorCode: string | null;
}
export interface OfferDetail {
  telephoneno: string;
  eligibledate: string;
  expiredate: string;
  packageid: string;
  eligiblePeriod: string;
  packageName: string;
  refno: string;
  amount: string;
  imageURL: string;
}

export interface OfferAvailabilityAPIResponse {
  map(arg0: (offer: any) => { title: any; activated: any; image: any; }): unknown;
  isSuccess: boolean;
  errorMessage: string | null;
  exceptionDetail: string | null;
  dataBundle: OfferDetail[];
  errorShow: string | null;
  errorCode: string | null;
}


export interface PromotionData {
  imageURL: string;
  amount: any;
  packageName: any;
  title: string;
  activated: boolean;
  image: string;
}

export interface PromotionProps {
  telephoneNo: string;
}