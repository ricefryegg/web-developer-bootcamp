class Friend extends React.Component {
    // default props
    static defaultProps = {
        name: 'Default', 
        hobbies: ['hobby1', 'hobby2', 'hobby3']
    }
    render() {
        const {name, hobbies} = this.props;
        const hobby_lis = hobbies.map(h => <li>{h}</li>);

        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobby_lis}
                </ul>
            </div>
        )
    }
}
