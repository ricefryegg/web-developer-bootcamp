class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name='Kevin'
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friend 
                    name='Elton'
                    hobbies={['Drawing', 'Painting', ]}
                />
                {/* default props */}
                <Friend />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))