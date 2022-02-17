import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        } else {
            navigate('/');
        }
    };

    return (
        <Form className="d-flex" onSubmit={submitHandler}>
            <Form.Control
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search Products"
                className="mr-sm-2 ml-sm-5 me-1"
            ></Form.Control>
            <Button type="submit" variant="dark outline-success" className="p-2">
                Search
            </Button>
        </Form>
    );
};

export default SearchBox;
