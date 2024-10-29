export const parseTime = (expireTime: string) => {
    if (expireTime) {
      const year = expireTime.slice(0, 4);
      const month = parseInt(expireTime.slice(4, 6), 10) - 1;
      const day = expireTime.slice(6, 8);

      return new Date(Date.UTC(+year, month, +day));
    }
    return null;
  };