import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import formatDate from '../../utils/formatDate'
import { Link } from 'react-router-dom'
import { likePost, unlikePost } from '../../actions/post'

const PostItem = ({
  likePost,
  unlikePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>
        <button
          onClick={(e) => likePost(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up"></i>
          {likes.length > 0 && <span> {likes.length}</span>}
        </button>
        <button
          onClick={(e) => unlikePost(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion{' '}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { likePost, unlikePost })(PostItem)
