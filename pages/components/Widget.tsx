interface Props {
  pending: number;
  completed: number;
  actionNeeded: number;
  total: number;
}

export default function Widget(prop: Props): JSX.Element {
  const {total, pending, completed, actionNeeded} = prop;

    return (
      <div className="row">
      <div className="col-md-3 col-sm-6 col-12">
        <div className="info-box">
          <span className="info-box-icon bg-info"><i className="far fa-envelope"></i></span>

          <div className="info-box-content">
            <span className="info-box-text">Total Application</span>
            <span className="info-box-number">{total}</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-12">
        <div className="info-box">
          <span className="info-box-icon bg-success"><i className="far fa-flag"></i></span>

          <div className="info-box-content">
            <span className="info-box-text">Completed</span>
            <span className="info-box-number">{completed}</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-12">
        <div className="info-box">
          <span className="info-box-icon bg-warning"><i className="far fa-copy"></i></span>

          <div className="info-box-content">
            <span className="info-box-text">Pending</span>
            <span className="info-box-number">{pending}</span>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-12">
        <div className="info-box">
          <span className="info-box-icon bg-danger"><i className="far fa-star"></i></span>

          <div className="info-box-content">
            <span className="info-box-text">Action Needed</span>
            <span className="info-box-number">{actionNeeded}</span>
          </div>
        </div>
      </div>
    </div>
    );
  }