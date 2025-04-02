import {base_url, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import {HeroInfo} from "../utils/types";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    // const thirtyDays = 30 * 24 * 60 * 60 * 1000;

    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero")!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info: HeroInfo = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    };
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    const heroFields: (keyof HeroInfo)[] = [
        'name', 'gender', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color',
    ]

    return (

        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    {heroFields.map(field => (
                        <p><span className='display-3'>{field}</span> {': '} {hero[field]}</p>
                    ))}
                </div>
                }
        </>
    );
};

export default AboutMe;