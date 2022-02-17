import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

type Props = {
    page: number;
    pages: number;
    isAdmin?: boolean;
    keyword?: string;
};

const Paginate: React.FC<Props> = ({ page, pages, isAdmin = false, keyword = '' }) => {
    return pages > 1 ? (
        <Pagination>
            {Array.from(Array(pages).keys()).map((x) => (
                <LinkContainer
                    key={x + 1}
                    to={
                        !isAdmin
                            ? keyword
                                ? `/search/${keyword}/page/${x + 1}`
                                : `/page/${x + 1}`
                            : `/admin/productlist/${x + 1}`
                    }
                >
                    <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    ) : (
        <></>
    );
};

export default Paginate;
