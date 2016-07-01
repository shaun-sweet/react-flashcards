var cards = [{question: 'do u liek butts', answer: 'yes'}, 
{question: 'new phon who dis', answer: 'ur worse nitemar'}, 
{question: 'r u a stegosorus', answer: 'touch my spikes fker'}, 
{question: 'have u heard of our lord and savior jesus christ', answer: 'no u'}, 
{question: 'Has anyone really been far as decided to use even go want to do look more like?', answer: 'You’ve got to be kidding me. I’ve been further even more decided to use even go need to do look more as anyone can.'}, 
{question: 'i sexually identify as an attack helicopter', answer: 'ever since i was a boy i dreamed of soaring over the fields'}, 
{question: 'lets touch butts', answer: 'k'}];

class Flashcard extends React.Component {
	constructor(props){
		super(props);
		this.state = {right: 0, wrong: 0, showAnswer: false, card: cards[0]};
	}

	getRandomCardIndex(){
		var x = Math.floor(Math.random()* cards.length);
		console.log(x);
		return x;
	}

	handleShow(){
		console.log('press show answer');
		this.setState({showAnswer: true});
	}

	handleCorrect(){
		console.log('ding ding ding!!');
		this.setState({right: this.state.right + 1, showAnswer: false, card: cards[this.getRandomCardIndex()]});
	}

	handleIncorrect(){
		console.log('git gud skrub');
		this.setState({wrong: this.state.wrong + 1,showAnswer: false, card: cards[this.getRandomCardIndex()]});
	}

	render() {
		if(this.state.showAnswer) {
			return (
				<div className = "flashcard">
					<div className = "flashcard-container">
						<div className = "flashcard-text">
							{this.state.card.answer}
						</div>
					</div>
					<div className = "tally">
						Correct: {this.state.right} Incorrect: {this.state.wrong}
					</div>
					<ReportResult correctPressed = {this.handleCorrect.bind(this)} incorrectPressed = {this.handleIncorrect.bind(this)}/>
				</div>
			);
		}else{
			return (
				<div className = "flashcard">
					<div className = "flashcard-container">
						<div className = "flashcard-text">
							{this.state.card.question}
						</div>
					</div>
					<div className = "tally">
						Correct: {this.state.right} Incorrect: {this.state.wrong} 
					</div>
					<ShowAnswer showPressed = {this.handleShow.bind(this)}/>
				</div>
			);
		}
	}

}

class ShowAnswer extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<div id = "bottomButtons">
				<button id = "showAnswerButton" className = "btn btn-default" onClick = {this.props.showPressed}>Show Answer</button>
			</div>
		);
	}
}

class ReportResult extends React.Component{

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
				<div id = "bottomButtons">
					<button id = "correctButton" className = "btn btn-default"  onClick = {this.props.correctPressed}>✓</button>
					<button id = "incorrectButton" className = "btn btn-default" onClick = {this.props.incorrectPressed}>X</button>
				</div>
		);
	}
}

class CreateCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {newQuestion: '', newAnswer: ''};
	}

	handleQuestionChange(e){
		this.setState({newQuestion: e.target.value});
	}

	handleAnswerChange(e){
		this.setState({newAnswer: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		cards.push({question: this.state.newQuestion, answer: this.state.newAnswer});
		this.setState({newQuestion: '', newAnswer: ''});
		console.log(this.state);
	}

	render(){
		return (
			<div className = "newCard">
				New Card
				<form className="newCardForm" onSubmit={this.handleSubmit.bind(this)}>
		        <input
		          type="text"
		          placeholder="Question"
		          value={this.state.newQuestion}
		          onChange={this.handleQuestionChange.bind(this)}
		        />
		        <input
		          type="text"
		          placeholder="Answer"
		          value={this.state.newAnswer}
		          onChange={this.handleAnswerChange.bind(this)}
		        />
		        <input type="submit" value="Post" />
		      </form>
		    </div>
		);
	}

}

ReactDOM.render(<Flashcard/>, document.getElementById('flashcard-container'));
ReactDOM.render(<CreateCard/>, document.getElementById('create-card-container'));