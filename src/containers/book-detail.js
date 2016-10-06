import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

	render() {
		if(!this.props.book) {
			return (
				<div className="col-sm-8">Select the book to get started.</div>
			);
		}
		return (
			<div className="col-sm-8">
				<h3>Book Details:</h3>
				<div>Title: <em>{this.props.book.title}</em></div>
				<div>Pages: <em>{this.props.book.pages}</em></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);