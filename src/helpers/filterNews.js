import dayjs from "dayjs";

const filterNews = (data, page) => {
  const news = data.hits
    .filter(
      (element) =>
        element?.author &&
        element?.story_title &&
        element?.story_url &&
        element?.created_at
    )
    .map((element, index) => ({
      story_id: `${element.author.toUpperCase()}-${element.objectID * (index + 1)}-${
        element.story_id
      }`,
      author: element.author,
      story_title: element.story_title,
      story_url: element.story_url,
      created_at: dayjs(element.created_at).format('H[ horas ]MMMM'),
      faves: false,
      page,
    }));
  return news;
};
export default filterNews;
