const isIPAddress = (url) => {
  if (!url) return false;

  const ipAddressPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

  const withoutProtocol = url.replace(/^(https?:\/\/)?/, '');

  return ipAddressPattern.test(withoutProtocol);
};

export default isIPAddress;
