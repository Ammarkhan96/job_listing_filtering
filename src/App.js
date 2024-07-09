import React, {Fragment, useState} from 'react';
import './App.css';
import useMediaQuery  from '@material-ui/core/useMediaQuery';
import Posts from './components/layouts/Posts';
import Header from './components/layouts/Header';
import Filter from './components/layouts/Filter';
import Footer from './components/layouts/Footer';
import jobDB from './components/modules/jobDB'

function App() {

  const [searchTerm, setSearchTerm] = useState([])
  const [showFilter, enableFilter] = useState(false)

  const onClick = (e) => {
    const {textContent} = e.target
    if(!searchTerm.includes(textContent)){
      setSearchTerm([...searchTerm, textContent])
      enableFilter(true)
    }
  }

  const clear = (e) => {
    const {className, textContent, previousElementSibling} = e.target
    if(className === 'clear'){
      setSearchTerm("")
    } else if(className === 'term'){
      setSearchTerm(searchTerm.filter(term=>term !== textContent))
    }else{
      setSearchTerm(searchTerm.filter(term => term !== previousElementSibling.textContent));
    }
    console.log(searchTerm.length)
    if(searchTerm.length <= 1){
      enableFilter(false)
    }
  }

  const checkCriteria = (data) => {
    return searchTerm.every(term => {
      return data.skills.includes(term)
    })
  }

  const isSmall = useMediaQuery("(max-width: 1050px)")

  const createPost = (post) => (
    <Posts key={post.id} onClick={onClick} showLine={isSmall} companyName={post.companyName}
    jobTitle={post.jobTitle} companyLogo={post.companyLogo} skills={post.skills} new={post.new}
    featured={post.featured} dayOfPost={post.dayOfPost} contract={post.contract} region={post.region}
    />
  )

  return (
    <Fragment>
      <Header />
      <Filter terms={searchTerm} onClick={clear} visible={showFilter} />
      {
        searchTerm.length > 0 ? jobDB.filter(checkCriteria).map(createPost) : jobDB.map(createPost)
      }
      <Footer />
    </Fragment>
  );
}

export default App;
