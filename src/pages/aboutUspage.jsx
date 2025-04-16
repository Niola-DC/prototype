import Goal from "../components/blocks/Goal";
import KeyVision from "../components/blocks/KeyVision";
import MeetCEO from "../components/blocks/MeetCEO";
import MissionSection from "../components/blocks/MissionSection";
import ScheduleAbout from "../components/blocks/ScheduleAbout";
import { Typography } from "../components/core/Typography";

const AboutUs = () => {
    return (
        <div>
            <MissionSection />
            <Goal />
            <MeetCEO />
            <KeyVision />
            <ScheduleAbout />
        </div>
    )
}

export default AboutUs;