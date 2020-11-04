# Job-Tracker

This application is for all user to simply track and manage their job applications and the status pertaining to each. Allowing each user to create a submission, make changes to previously created submissions, and delete entries all together. 

```javascript
<div className="form">
        <button onClick={this.toggleForm}>Enter New Application</button>
        {(this.state.show)
          ? <form onSubmit={addApp}>
              <label>Job Status:</label>
                <select onChange={newStatus}>
                  <option value="" disabled selected>Choose Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              <label>Date Submitted:</label>
                <input onChange={newDate} type="date"/>
              <label>Job Title:</label>
                <input onChange={newJob} type="text" placeholder="Job Title"/>
              <label>Company:</label>
                <input onChange={newCompany} type="text" placeholder="Company"/>
              <label>Location:</label>
                <input onChange={newLocation} type="text" placeholder="Location"/>
              <label>Job Link:</label>
                <input onChange={newLink} type="text" placeholder="Link"/>
              <input type="submit" value="submit"/>
            </form>
          : null
         }
      </div>
```