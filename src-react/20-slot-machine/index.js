class App extends React.Component {
    render() {
        let getEmoji = () => {
            const emojis = ['🍇', '🍉', '🍓', '🍒'];
            const index = Math.floor(Math.random() * emojis.length);            

            return emojis[index];
        }

        return (
            <div>
                <h1>Slot Machines!</h1>

                <Machine 
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
                <Machine  
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
                <Machine 
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
                <Machine 
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
                <Machine 
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
                <Machine 
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
                <Machine 
                    s1={getEmoji()}
                    s2={getEmoji()}
                    s3={getEmoji()} 
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));