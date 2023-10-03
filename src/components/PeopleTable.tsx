import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { Person } from '../types';
import { columnNames } from '../utils/constants';
import { PersonItem } from './PersonItem';
import { SearchParams, getSearchWith } from '../utils/searchHelper';

type Props = {
  people: Person[]
};

export const PeopleTable: React.FC<Props> = ({ people }) => {
  const [search] = useSearchParams();
  const sort = search.get('sort');
  const order = search.get('order');

  const getSortedLink = (newSortField: string) => {
    const newSort: SearchParams = {
      sort: newSortField,
      order: null,
    };

    if (sort === newSortField && order) {
      newSort.sort = null;
    }

    if (sort === newSortField && !order) {
      newSort.order = 'desc';
    }

    return getSearchWith(search, newSort);
  };

  return (
    <div className="block">
      <div className="box table-container">
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              {columnNames.map(name => (
                <th key={name}>
                  <span className="is-flex is-flex-wrap-nowrap">
                    {name}
                    <Link to={{
                      search: getSortedLink(name.toLowerCase()),
                    }}
                    >
                      <span className="icon">
                        <i className={classNames('fas', {
                          'fa-sort': sort !== name.toLowerCase(),
                          'fa-sort-up': sort === name.toLowerCase() && !order,
                          'fa-sort-down': sort === name.toLowerCase() && order,
                        })}
                        />
                      </span>
                    </Link>
                  </span>
                </th>
              ))}
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {people.map(person => (
              <PersonItem person={person} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
