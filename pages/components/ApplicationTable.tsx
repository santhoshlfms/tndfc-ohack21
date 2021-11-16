import Datatable from 'react-bs-datatable';

export default function ApplicationTable(): JSX.Element {

    const header = [
        { title: 'Mobile No', prop: 'Mobile' },
        { title: 'Name', prop: 'realname' },
        { title: 'Father Name', prop: 'fathername' },
        { title: 'Aadhaar', prop: 'aadhaar' },
        { title: 'Status', prop: 'status' },
      ];

      const customLabels = {
        first: '<<',
        last: '>>',
        prev: '<',
        next: '>',
        show: 'Display',
        entries: 'rows',
        noResults: 'There is no data to be displayed'
      };

    const body = Array.from(new Array(57), () => {
        const rd = Number((Math.random() * 10).toFixed(1));
      
        if (rd > 0.5) {
          return {
            Mobile: `900380840${rd}`,
            realname: `Billy ${rd}`,
            fathername: 'Mars', 
            aadhaar: '13214356464547',
            status: 'Pending',
            sortable: true
          };
        }
      
        return {
          username: 'john-nhoj',
          realname: `John ${rd}`,
          location: 'Saturn',
          aadhaar: '534242154456547',
          status: 'Pending',
          sortable: true
        };
      });

  return (
    <div className="container">
        <Datatable tableHeaders={header} tableBody={body} rowsPerPage={15} labels={customLabels} />
    </div>
  );
}
