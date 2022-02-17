import Helmet from 'react-helmet';

type Props = {
    title?: string;
    description?: string;
    keywords?: string;
};

const Meta: React.FC<Props> = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'Welcome To ShopToIt',
    description: 'We sell the best products for cheap',
    keywords: 'electronics, buy electronics, cheap electronics',
};

export default Meta;
