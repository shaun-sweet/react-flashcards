class Flashcard extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		return <div>Hello world!</div>
	}

}

class ShowAnswer extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

}

ReactDOM.render(<Flashcard />, document.getElementById('content'));