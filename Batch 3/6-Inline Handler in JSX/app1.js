const initialStories = [
    {
    title: 'React',
    ...
},
{
    title: 'Redux',
    ...
},
];

 ...

const App = () => {
  const [searchTerm, setSearchTerm] = ...

    const [stories, setStories] = React.useState(initialStories);
    ...
};
    