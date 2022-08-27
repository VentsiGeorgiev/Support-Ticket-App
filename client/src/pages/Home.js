import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section>
                <h1>What do you need help with?</h1>
                <p>Please choose from an option below</p>
            </section>
            <section>
                <div>
                    <Link to='/new-ticket'>Create New Ticket</Link>
                </div>
                <div>
                    <Link to='/tickets'>My tickets</Link>
                </div>
            </section>

        </>
    );
}

export default Home;
