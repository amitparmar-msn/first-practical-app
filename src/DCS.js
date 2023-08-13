import StaticLinks from "./components/StaticLinks";
import { SPALinks } from "./components/SPALinks";
import PageRoutes from "./components/Routes";
const DCS = () => {
    return (
        <div>
            <StaticLinks />
            <SPALinks />
            <hr />
            <PageRoutes />
        </div>
    );
};
export default DCS;
