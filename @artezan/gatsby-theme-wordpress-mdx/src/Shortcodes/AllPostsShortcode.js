/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import { CardList } from '../components/CardList'
import { MixPostsContainer } from '../components/AllPosts'

export const AllPosts = props => <MixPostsContainer {...props} />
