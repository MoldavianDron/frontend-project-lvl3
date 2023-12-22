import i18next from "i18next";

export const parseRss = (rawData) => {
  const parsedDocument = new DOMParser().parseFromString(rawData, "application/xml");
  const parseError = parsedDocument.querySelector("parsererror");
  if (parseError) {
    throw new Error(i18next.t("errors.no-valid-rss"));
  }
  const channel = parsedDocument.querySelector("channel");
  const channelTitle = channel.querySelector("title")?.textContent;
  const channelDescription = channel.querySelector("description").textContent;
  const items = [];
  channel.querySelectorAll("item").forEach((item) => {
    const itemTitle = item.querySelector("title").textContent;
    const itemLink = item.querySelector("link").textContent;
    const itemDescription = item.querySelector("description").textContent;
    items.push({
      title: itemTitle,
      link: itemLink,
      description: itemDescription
    })
  });
  return {
    channel: {
      title: channelTitle,
      description: channelDescription,
    },
    items,
  }
};