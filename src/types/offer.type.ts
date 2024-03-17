export type OfferType = {
  title: {
    ru: string,
    en: string
  },
  offerItems:
    {
      image: string,
      info: {
        ru: string,
        en: string
      },
    }[],
  desc: {
    ru: string,
    en: string
  }
}
