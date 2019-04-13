export namespace KadkRoute {
  export const
    SendIdea = '/send-idea',
    BrowseIdeas = '/browse-ideas',
    BrowseIdeaById = (id: string) => BrowseIdeas + '/'+ id,
    Feedback = '/feedback';
}
