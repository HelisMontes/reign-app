const filterNews = (data, page) => {
  const news = data.hits
    .filter(
      (element) =>
        element?.author &&
        element?.story_title &&
        element?.story_url &&
        element?.created_at
    )
    .map((element) => ({
      story_id: `${element.objectID}-${element.story_id}`,
      author: element.author,
      story_title: element.story_title,
      story_url: element.story_url,
      created_at: element.created_at,
      faves: false,
      page,
    }));

  return news;
};
export default filterNews;
