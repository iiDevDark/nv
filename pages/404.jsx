import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'دخلت غلط',
        'Damn it! This dead-end road.',
        'The Aurors blocked this road, Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

