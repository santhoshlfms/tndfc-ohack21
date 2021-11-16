export default function Widget(): JSX.Element {

    return (
        <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-info"><i className="far fa-envelope"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Total Application</span>
              <span className="info-box-number">1,410</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-success"><i className="far fa-flag"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Completed</span>
              <span className="info-box-number">410</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-warning"><i className="far fa-copy"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Pending</span>
              <span className="info-box-number">13,648</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-danger"><i className="far fa-star"></i></span>

            <div className="info-box-content">
              <span className="info-box-text">Action Needed</span>
              <span className="info-box-number">93,139</span>
            </div>
          </div>
        </div>
      </div>
    );
  }