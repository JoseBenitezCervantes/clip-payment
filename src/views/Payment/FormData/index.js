import React from "react";
import "./index.scss";

const FormData = () => {
  return (
    <div>
      <form>
        <p>
          <label for="number">Card Number</label>
          <input
            type="number"
            id="number"
            required
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </p>
        <p>
          <label for="name">Card Name</label>
          <input type="text" id="name" required />
        </p>
        <p>
          <div className="dateContent">
            <div>
              <p>
                <label for="name">Expiration Date</label>
              </p>
                <select>
                  <option value="0">Month</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select>
                  <option value="0">Year</option>
                  <option value="1">21</option>
                  <option value="2">22</option>
                  <option value="3">23</option>
                  <option value="4">24</option>
                  <option value="5">25</option>
                  <option value="6">26</option>
                  <option value="7">27</option>
                  <option value="8">28</option>
                  <option value="9">29</option>
                  <option value="10">30</option>
                </select>
            </div>
            <div>
              <p>
                <label for="cvv">CVV</label>
              </p>
              <input type="password" id="cvv" required />
            </div>
          </div>
        </p>
        <button type="submit" id="submit">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
};

export default FormData;
