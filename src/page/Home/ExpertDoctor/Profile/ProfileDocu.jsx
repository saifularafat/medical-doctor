import { GrLocation } from "react-icons/gr";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import OverViews from "./OverViews";
import Container from "../../../../components/Container/Container";
const ProfileDocu = ({ profileInfo }) => {
    const overViews = profileInfo?.overView;
    const locations = profileInfo?.location;
    const businessHours = profileInfo?.businessHours;

    return (
        <div>
            <div className="bg-white md:p-9 p-5 rounded-lg mb-8">
                <div className="md:flex items-center gap-7">
                    <div>
                        <p className="md:w-[350px]  h-[240px] md:h-[378px] rounded-lg bg-slate-300"></p>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-4xl font-bold text-title-color pt-4 md:pt-0">{profileInfo?.doc_name}</h2>
                        <h5 className="font-normal text-lg text-description-color">{profileInfo?.title}</h5>
                        <div className="flex items-center">
                            <div className="rating">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    checked
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                            <span className="text-lg font-normal pl-2">({profileInfo?.totalRating})</span>
                        </div>
                        <div className="md:flex items-center">
                            <div className="flex items-center text-description-color">
                                <GrLocation className="w-6 h-6 text-description-color" />
                                <span className="pl-5">{profileInfo?.adders}</span>
                            </div>
                            <span className="text-button-color md:pl-2 pl-10">{profileInfo?.direction}</span>
                        </div>
                        <div className="grid md:grid-cols-6 grid-cols-3 md:gap-5 gap-3 md:py-4">
                            <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                            <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                            <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                            <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                            <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                            <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                        </div>
                        <div className=" hidden md:block">
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl">Dental Filling</button>
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl ml-5">Teeth Whitneing</button>
                        </div>
                        <div className="md:hidden block pt-4">
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl">Dental Filling</button> <br />
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl mt-3">Teeth Whitneing</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-9">
                <Tabs>
                    <TabList>
                        <Tab>OverViews</Tab>
                        <Tab>Locations</Tab>
                        <Tab>Reviews</Tab>
                        <Tab>Business hours</Tab>
                    </TabList>
                    <TabPanel>
                        {
                            overViews?.map((views, index) => <OverViews
                                key={index}
                                viewsInfo={views}
                            />)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            locations.map((location, index) => <div
                                key={index}
                                className="md:py-12 py-6"
                            >
                                <Container>
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-xl font-semibold text-title-color"> Hospital Name: <span className="text-subTitle-color font-bold">{location?.hospitalLocation}</span> </h2>
                                        <p className="text-xl font-semibold text-title-color">Address: <span className="text-subTitle-color text-xl">{location?.adders}</span></p>
                                        <p className="text-xl font-semibold text-title-color">TelePhone number: <span className="text-subTitle-color text-xl">{location?.talePhone}</span></p>
                                    </div>
                                </Container>
                            </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Reviews</h2>
                    </TabPanel>
                    <TabPanel>
                        {
                            businessHours.map((business, index) => <div
                                key={index}
                                className="md:py-12 py-6"
                            >
                                <Container>
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-xl font-semibold text-title-color"> Job Time: <span className="text-subTitle-color font-bold">{business?.jobTime}</span> </h2>
                                        <p className="text-xl font-semibold text-title-color">Part Time: <span className="text-subTitle-color text-xl">{business?.pathTime}</span></p>
                                    </div>
                                </Container>
                            </div>)
                        }
                    </TabPanel>
                </Tabs >
            </div>
        </div>
    );
};

export default ProfileDocu;