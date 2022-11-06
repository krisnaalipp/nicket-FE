import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import "../vipSeat.css";

function VipSeat() {
  return (
    <>
      <div className="col-12 mx-auto">
        <Card
          body
          className="shadow-lg"
          style={{
            border: 0,
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h4>
              <MdAirlineSeatReclineNormal
                style={{
                  width: "5%",
                  height: "5%",
                  marginRight: "1%",
                  marginBottom: "0.5%",
                }}
              />
              Select your VIP Seat
            </h4>
          </div>
          <hr />
          <div>
            <Card
              body
              className="shadow-lg"
              style={{
                border: 0,
                marginBottom: "2%",
              }}
            >
              <div className="field-side">
                <div className="field">Football Field</div>
              </div>
            </Card>

            <ol>
              <li className="row row--1">
                <ol className="vip-seats" type="V-1">
                  <li className="vip-seat">
                    <input type="checkbox" id="1A" />
                    <label for="1A">1A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1B" />
                    <label for="1B">1B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1C" />
                    <label for="1C">1C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="1D" />
                    <label for="1D">1D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1E" />
                    <label for="1E">1E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1F" />
                    <label for="1F">1F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1G" />
                    <label for="1G">1G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1H" />
                    <label for="1H">1H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1I" />
                    <label for="1I">1I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1J" />
                    <label for="1J">1J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1K" />
                    <label for="1K">1K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1L" />
                    <label for="1L">1L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1M" />
                    <label for="1M">1M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="1D" />
                    <label for="1N">1N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1O" />
                    <label for="1O">1O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1P" />
                    <label for="1P">1P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1Q" />
                    <label for="1Q">1Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1R" />
                    <label for="1R">1R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1S" />
                    <label for="1S">1S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="1T" />
                    <label for="1T">1T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--2">
                <ol className="vip-seats" type="V-2">
                  <li className="vip-seat">
                    <input type="checkbox" id="2A" />
                    <label for="2A">2A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2B" />
                    <label for="2B">2B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2C" />
                    <label for="2C">2C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="2D" />
                    <label for="2D">2D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2E" />
                    <label for="2E">2E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2F" />
                    <label for="2F">2F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2G" />
                    <label for="2G">2G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2H" />
                    <label for="2H">2H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2I" />
                    <label for="2I">2I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2J" />
                    <label for="2J">2J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2K" />
                    <label for="2K">2K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2L" />
                    <label for="2L">2L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2M" />
                    <label for="2M">2M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="2D" />
                    <label for="2N">2N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2O" />
                    <label for="2O">2O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2P" />
                    <label for="2P">2P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2Q" />
                    <label for="2Q">2Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2R" />
                    <label for="2R">2R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2S" />
                    <label for="2S">2S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="2T" />
                    <label for="2T">2T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--3">
                <ol className="vip-seats" type="V-3">
                  <li className="vip-seat">
                    <input type="checkbox" id="3A" />
                    <label for="3A">3A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3B" />
                    <label for="3B">3B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3C" />
                    <label for="3C">3C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="3D" />
                    <label for="3D">3D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3E" />
                    <label for="3E">3E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3F" />
                    <label for="3F">3F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3G" />
                    <label for="3G">3G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3H" />
                    <label for="3H">3H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3I" />
                    <label for="3I">3I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3J" />
                    <label for="3J">3J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3K" />
                    <label for="3K">3K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3L" />
                    <label for="3L">3L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3M" />
                    <label for="3M">3M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="3D" />
                    <label for="3N">3N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3O" />
                    <label for="3O">3O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3P" />
                    <label for="3P">3P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3Q" />
                    <label for="3Q">3Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3R" />
                    <label for="3R">3R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3S" />
                    <label for="3S">3S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="3T" />
                    <label for="3T">3T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--4">
                <ol className="vip-seats" type="V-4">
                  <li className="vip-seat">
                    <input type="checkbox" id="4A" />
                    <label for="4A">4A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4B" />
                    <label for="4B">4B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4C" />
                    <label for="4C">4C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="4D" />
                    <label for="4D">4D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4E" />
                    <label for="4E">4E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4F" />
                    <label for="4F">4F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4G" />
                    <label for="4G">4G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4H" />
                    <label for="4H">4H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4I" />
                    <label for="4I">4I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4J" />
                    <label for="4J">4J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4K" />
                    <label for="4K">4K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4L" />
                    <label for="4L">4L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4M" />
                    <label for="4M">4M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="4D" />
                    <label for="4N">4N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4O" />
                    <label for="4O">4O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4P" />
                    <label for="4P">4P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4Q" />
                    <label for="4Q">4Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4R" />
                    <label for="4R">4R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4S" />
                    <label for="4S">4S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="4T" />
                    <label for="4T">4T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--5">
                <ol className="vip-seats" type="V-5">
                  <li className="vip-seat">
                    <input type="checkbox" id="5A" />
                    <label for="5A">5A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5B" />
                    <label for="5B">5B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5C" />
                    <label for="5C">5C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="5D" />
                    <label for="5D">5D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5E" />
                    <label for="5E">5E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5F" />
                    <label for="5F">5F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5G" />
                    <label for="5G">5G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5H" />
                    <label for="5H">5H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5I" />
                    <label for="5I">5I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5J" />
                    <label for="5J">5J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5K" />
                    <label for="5K">5K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5L" />
                    <label for="5L">5L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5M" />
                    <label for="5M">5M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="5D" />
                    <label for="5N">5N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5O" />
                    <label for="5O">5O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5P" />
                    <label for="5P">5P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5Q" />
                    <label for="5Q">5Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5R" />
                    <label for="5R">5R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5S" />
                    <label for="5S">5S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="5T" />
                    <label for="5T">5T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--6">
                <ol className="vip-seats" type="V-6">
                  <li className="vip-seat">
                    <input type="checkbox" id="6A" />
                    <label for="6A">6A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6B" />
                    <label for="6B">6B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6C" />
                    <label for="6C">6C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="6D" />
                    <label for="6D">6D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6E" />
                    <label for="6E">6E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6F" />
                    <label for="6F">6F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6G" />
                    <label for="6G">6G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6H" />
                    <label for="6H">6H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6I" />
                    <label for="6I">6I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6J" />
                    <label for="6J">6J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6K" />
                    <label for="6K">6K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6L" />
                    <label for="6L">6L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6M" />
                    <label for="6M">6M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="6D" />
                    <label for="6N">6N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6O" />
                    <label for="6O">6O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6P" />
                    <label for="6P">6P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6Q" />
                    <label for="6Q">6Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6R" />
                    <label for="6R">6R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6S" />
                    <label for="6S">6S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="6T" />
                    <label for="6T">6T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--7">
                <ol className="vip-seats" type="V-7">
                  <li className="vip-seat">
                    <input type="checkbox" id="7A" />
                    <label for="7A">7A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7B" />
                    <label for="7B">7B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7C" />
                    <label for="7C">7C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="7D" />
                    <label for="7D">7D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7E" />
                    <label for="7E">7E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7F" />
                    <label for="7F">7F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7G" />
                    <label for="7G">7G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7H" />
                    <label for="7H">7H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7I" />
                    <label for="7I">7I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7J" />
                    <label for="7J">7J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7K" />
                    <label for="7K">7K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7L" />
                    <label for="7L">7L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7M" />
                    <label for="7M">7M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="7D" />
                    <label for="7N">7N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7O" />
                    <label for="7O">7O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7P" />
                    <label for="7P">7P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7Q" />
                    <label for="7Q">7Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7R" />
                    <label for="7R">7R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7S" />
                    <label for="7S">7S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="7T" />
                    <label for="7T">7T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--8">
                <ol className="vip-seats" type="V-8">
                  <li className="vip-seat">
                    <input type="checkbox" id="8A" />
                    <label for="8A">8A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8B" />
                    <label for="8B">8B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8C" />
                    <label for="8C">8C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="8D" />
                    <label for="8D">8D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8E" />
                    <label for="8E">8E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8F" />
                    <label for="8F">8F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8G" />
                    <label for="8G">8G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8H" />
                    <label for="8H">8H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8I" />
                    <label for="8I">8I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8J" />
                    <label for="8J">8J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8K" />
                    <label for="8K">8K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8L" />
                    <label for="8L">8L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8M" />
                    <label for="8M">8M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="8D" />
                    <label for="8N">8N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8O" />
                    <label for="8O">8O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8P" />
                    <label for="8P">8P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8Q" />
                    <label for="8Q">8Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8R" />
                    <label for="8R">8R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8S" />
                    <label for="8S">8S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="8T" />
                    <label for="8T">8T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--9">
                <ol className="vip-seats" type="V-9">
                  <li className="vip-seat">
                    <input type="checkbox" id="9A" />
                    <label for="9A">9A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9B" />
                    <label for="9B">9B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9C" />
                    <label for="9C">9C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="9D" />
                    <label for="9D">9D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9E" />
                    <label for="9E">9E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9F" />
                    <label for="9F">9F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9G" />
                    <label for="9G">9G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9H" />
                    <label for="9H">9H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9I" />
                    <label for="9I">9I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9J" />
                    <label for="9J">9J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9K" />
                    <label for="9K">9K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9L" />
                    <label for="9L">9L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9M" />
                    <label for="9M">9M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="9D" />
                    <label for="9N">9N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9O" />
                    <label for="9O">9O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9P" />
                    <label for="9P">9P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9Q" />
                    <label for="9Q">9Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9R" />
                    <label for="9R">9R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9S" />
                    <label for="9S">9S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="9T" />
                    <label for="9T">9T</label>
                  </li>
                </ol>
              </li>
              <li className="row row--10">
                <ol className="vip-seats" type="V-10">
                  <li className="vip-seat">
                    <input type="checkbox" id="10A" />
                    <label for="10A">10A</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10B" />
                    <label for="10B">10B</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10C" />
                    <label for="10C">10C</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="10D" />
                    <label for="10D">10D</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10E" />
                    <label for="10E">10E</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10F" />
                    <label for="10F">10F</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10G" />
                    <label for="10G">10G</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10H" />
                    <label for="10H">10H</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10I" />
                    <label for="10I">10I</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10J" />
                    <label for="10J">10J</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10K" />
                    <label for="10K">10K</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10L" />
                    <label for="10L">10L</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10M" />
                    <label for="10M">10M</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" disabled id="10D" />
                    <label for="10N">10N</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10O" />
                    <label for="10O">10O</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10P" />
                    <label for="10P">10P</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10Q" />
                    <label for="10Q">10Q</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10R" />
                    <label for="10R">10R</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10S" />
                    <label for="10S">10S</label>
                  </li>
                  <li className="vip-seat">
                    <input type="checkbox" id="10T" />
                    <label for="10T">10T</label>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <hr />
          <div className="row" style={{ textAlign: "center" }}>
            <div
              className="col-3 mx-auto"
              style={{ backgroundColor: "#ddd", borderRadius: "0.3rem" }}
            >
              Sold
            </div>
            <div
              className="col-3 mx-auto"
              style={{
                backgroundColor: "rgba(33, 232, 26, 0.54)",
                borderRadius: "0.3rem",
              }}
            >
              Available
            </div>
            <div
              className="col-3 mx-auto"
              style={{
                backgroundColor: "rgba(13, 170, 7, 1)",
                borderRadius: "0.3rem",
              }}
            >
              Selected
            </div>
          </div>
        </Card>
      </div>
      <div className="col-6 mx-auto" style={{ marginTop: "2rem" }}>
        <Card
          body
          className="shadow-lg"
          style={{
            border: 0,
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h6>
              <IoInformationCircleSharp
                style={{
                  width: "8%",
                  height: "8%",
                  marginRight: "1%",
                  marginBottom: "0.5%",
                }}
              />
              Complete your ticket purchase information
            </h6>
          </div>
          <hr />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>NIK</Form.Label>
              <Form.Control type="number" placeholder="Enter your NIK" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Address"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Enter your address" />
            </FloatingLabel>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button variant="warning">Back</Button>
              &nbsp;
              <Button variant="primary" type="submit">
                Purchase
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default VipSeat;
