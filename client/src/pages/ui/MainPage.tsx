import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/api/lib/hook';
import Card from 'react-bootstrap/Card';
import { getCategories } from '../../entities/category/model/redux/categoryThunks';

export default function MainPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);

  useEffect(() => {
    void dispatch(getCategories())
  }, [])

  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{categories.map((category) => (
          <h1 key={category.id}>{category.name}</h1>
        ))}</Card.Title>
      </Card.Body>
    </Card>
  );
}

