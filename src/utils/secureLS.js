import SecureLS from "secure-ls";

const ls = new SecureLS({
  encodingType: "aes",
  isCompression: true,
});

export default ls;