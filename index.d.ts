declare const cregexs: {
   isEmail: () => RegExp;
   isEmpty: () => RegExp;
   isNoEmpty: () => RegExp;
   blacklist: () => RegExp;
   isAscii: () => RegExp;
   isCreditCard: () => RegExp;
   isHash: () => RegExp;
   isHexColor: () => RegExp;
   isLength: () => RegExp;
   isLowercase: () => RegExp;
   isMobilePhone: () => RegExp;
   isSlug: () => RegExp;
   isUrl: () => RegExp;
   isUppercase: () => RegExp;
};
export default cregexs;
