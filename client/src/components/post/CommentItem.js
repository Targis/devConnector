import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import formatDate from '../../utils/formatDate'
import { deleteComment } from '../../actions/post'

const CommentItem = ({
  auth,
  postId,
  deleteComment,
  comment: { _id, text, name, avatar, user, date },
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">Posted on {date && formatDate(date)}</p>
      {!auth.loading && auth.user._id === user && (
        <button
          onClick={(e) => deleteComment(postId, _id)}
          className="btn btn-danger"
          type="button"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  </div>
)

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
