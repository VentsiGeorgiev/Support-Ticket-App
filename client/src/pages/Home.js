import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section className='hero'>
                <h1 className='hero__title'>What do you need help with?</h1>
                <p>Please choose from an option below</p>
            </section>
            <section>
                <div className='link'>
                    <Link to='/new-ticket'>Create New Ticket</Link>
                </div>
                <div className='link'>
                    <Link to='/tickets'>My tickets</Link>
                </div>
            </section>

        </>
    );
}

export default Home;
