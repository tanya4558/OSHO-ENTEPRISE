// Central business / brand information for OSHO ENTERPRISE
export const BUSINESS = {
  name: "OSHO ENTERPRISE",
  brandLine: "The Farmer's Market",
  tagline: "Natural & Organic",
  intro:
    "Premium 100% natural cocopeat powder for healthier roots, better water retention and stronger, greener growth — straight from the farm to your garden.",
  proprietor: "Nirbhay Sureshbhai Satani",
  phone: "7096965142",
  phoneIntl: "917096965142",
  email: "oshoenterprise24@gmail.com",
  address: {
    line1: "A-36, Hari Krishna Society-1",
    line2: "Near Puna Talav, Punagam",
    city: "Surat",
    state: "Gujarat",
    pincode: "395010",
    country: "India",
  },
};

export const fullAddress = [
  BUSINESS.address.line1,
  BUSINESS.address.line2,
  `${BUSINESS.address.city}, ${BUSINESS.address.state} - ${BUSINESS.address.pincode}`,
  BUSINESS.address.country,
].join(", ");

export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(
    message || "Hi OSHO Enterprise, I'd like to know more about your cocopeat powder."
  )}`;

export const telLink = `tel:+${BUSINESS.phoneIntl}`;
export const mailLink = `mailto:${BUSINESS.email}`;
