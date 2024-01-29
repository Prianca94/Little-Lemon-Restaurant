import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { Chevron } from '../lib/svg/FormSVG';
import '../styles/AdditionalInformation.css';

interface OccasionTypes {
    id: number;
    occasion: string;
    key?: string;
}

interface AdditionalInformationTypes {
    occasion: number;
    setOccasion: React.Dispatch<React.SetStateAction<number>>;
    checkmark: number[];
    setCheckmark: React.Dispatch<React.SetStateAction<number[]>>;
}

const occasionDatas: OccasionTypes[] = [
    { id: 0, occasion: 'Casual', key: "new" },
    { id: 1, occasion: 'Formal', key: "key" },
    { id: 2, occasion: 'Party', key: "ree" },
]


export default function AdditionalInformation({ occasion, setOccasion, checkmark, setCheckmark }: AdditionalInformationTypes) {
    const [isOpened, setIsOpened] = useState(true);
    return (
        <>
            <button aria-label="expand-menu"
                title="Expand" className="mt-24 lead-text additional-information" type="button" onClick={() => setIsOpened(!isOpened)}>Additional Information <Chevron className={`${isOpened ? 'chevron--opened' : ""}`} /></button>
            <Collapse isOpened={isOpened}>
                {/* <AdditionalInformation /> */}
                <div style={{ justifyContent: 'space-around' }} className="people-component">
                    {
                        occasionDatas.map((occasions) => (
                            <button type="button"
                            aria-label="pick occasion"
                                key={occasions.key}
                                onClick={() => setOccasion(occasions.id)}
                                className={`paragraph form-button ${occasion === occasions.id ? 'form-button-active' : ""}`}>
                                {occasions.occasion}
                            </button>
                        ))
                    }
                </div>
               
            </Collapse>
        </>
    )
};