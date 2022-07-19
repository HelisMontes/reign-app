import dayjs from 'dayjs';

/**
 *
 * @param {array} data //Array with the news data that we are going to filter and format
 * @param {number} params// The search parameters
 * @returns Array
 */
const filterNews = (data, params) => {
  const news = data.hits
    .filter(
      (element) =>
        element?.author &&
        element?.story_title &&
        element?.story_url &&
        element?.created_at
    )
    .map((element, index) => ({
      story_id: `${element.author.toUpperCase()}-${
        element.objectID * (index + 1)
      }-${element.story_id}`,
      author: element.author,
      story_title: element.story_title,
      story_url: element.story_url,
      created_at: dayjs(element.created_at).format('HH[ horas ]MMMM'),
      faves: false,
      page: params.page,
      framework: params.query,
    }));
  return news;
};
export default filterNews;
