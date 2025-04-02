import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";

const Home = () => {
    return (
        <div>
            <main className="clearfix">
                <Hero/>
                <DreamTeam/>
                <FarGalaxy/>
            </main>
        </div>
    );
};

export default Home;