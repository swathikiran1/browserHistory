import {Component} from 'react'

import ListItem from './components/ListItem'

import './App.css'

// These are the list used in the application. You can move them to any component needed.

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
    historyClsValue: 'history-container',
    historyContainerClsValue: 'history-container2',
    paragraphValue: 'paragraph2',
  }

  onChangeHistoryList = event => {
    this.setState(prevState => {
      const text = event.target.value
      const modifiedList = prevState.historyList.filter(eachItem =>
        eachItem.title.toLowerCase().includes(text.toLowerCase()),
      )
      let result
      if (modifiedList.length === 0) {
        result = {
          searchInput: text,
          historyClsValue: 'history-container1',
          historyContainerClsValue: 'history-container3',
          paragraphValue: 'paragraph1',
        }
      } else {
        result = {
          searchInput: text,
          historyClsValue: 'history-container',
          historyContainerClsValue: 'history-container2',
          paragraphValue: 'paragraph2',
        }
      }

      return result
    })
  }

  onDeleteHistoryItem = historyId => {
    this.setState(prevState => {
      let result
      if (prevState.historyList.length === 1) {
        result = {
          historyClsValue: 'history-container1',
          historyContainerClsValue: 'history-container3',
          paragraphValue: 'paragraph1',
        }
      } else {
        const changedHistoryList = prevState.historyList.filter(
          eachItem => eachItem.id !== historyId,
        )
        result = {
          historyList: changedHistoryList,
          historyClsValue: 'history-container',
          historyContainerClsValue: 'history-container2',
          paragraphValue: 'paragraph2',
        }
      }

      return result
    })
  }

  render() {
    const {
      searchInput,
      historyList,
      historyClsValue,
      historyContainerClsValue,
      paragraphValue,
    } = this.state

    const finalHistoryList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              onChange={this.onChangeHistoryList}
            />
          </div>
        </div>
        <div className={historyClsValue}>
          <div className={historyContainerClsValue}>
            <ul>
              {finalHistoryList.map(eachItem => (
                <ListItem
                  historyObj={eachItem}
                  key={eachItem.id}
                  onDelete={this.onDeleteHistoryItem}
                />
              ))}
            </ul>
          </div>
          <p className={paragraphValue}>There is no history to show</p>
        </div>
      </div>
    )
  }
}

export default App
