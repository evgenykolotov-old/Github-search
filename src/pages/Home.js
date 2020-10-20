import React from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import GitHubContext from '../context/github/githubContext';

const Home = props => {
  const {loading, users} = React.useContext(GitHubContext);
  return (
    <React.Fragment>
      <Search />
      <div className="row">
      {
        loading
          ? <p className="text-center">Загрузка...</p>
          : users.map(user => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
          ))
      }
      </div>
    </React.Fragment>
  )
}

export default Home;
