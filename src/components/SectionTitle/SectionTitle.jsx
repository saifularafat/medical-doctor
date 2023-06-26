
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="space-y-5 text-center md:w-[900px] mx-auto">
            <h2 className="text-[40px] font-bold text-title-color">{title}</h2>
            <p className="text-base text-subTitle-color">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;