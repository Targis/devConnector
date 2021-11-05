import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import { getPost } from '../../actions/post'
import CommentForm from './CommentForm'

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id)
  }, [getPost, match.params.id])

  return loading || post === null || post._id !== match.params.id ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
    </Fragment>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPost })(Post)
