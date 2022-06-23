from fastapi.testclient import TestClient
from db import ProfileQueries
from unittest import TestCase
from routers.profiles import get_profiles, get_current_user, liked
from main import app


class NormalProfileQueries(TestCase):
    def get_all_profiles(self, user_id, page: int = 0):
        return 1, [
            [
                9,
                "test",
                "test",
                "test",
                "test",
                "test",
                "2002-02-22",
                "test",
                "test",
                0,
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
            ]
        ]

    def like_profile(self, id, target_user):
        return 1


async def override_fake_like():
    return {"id": 1, "active_user_id": 2, "target_user_id": 3, "liked": True}
    # return {'target_user_id': 1}


async def override_get_fake_user():
    return {
        "id": 1,
        "username": "wowzer",
        "email": "wowzer@gmail.com",
        "full_name": "your mom",
    }


async def override_get_profiles():
    return {
        "page_count": 0,
        "profiles": [
            {
                "id": 0,
                "username": "string",
                "email": "string",
                "first_name": "string",
                "last_name": "string",
                "location": "string",
                "date_of_birth": "2022-06-22",
                "photo": "string",
                "about": "string",
                "height": 0,
                "job": "string",
                "education": "string",
                "gender": "string",
                "sexual_orientation": "string",
                "religion": "string",
                "ethnicity": "string",
                "pronouns": "string",
            }
        ],
    }


# app = FastAPI()

app.dependency_overrides[get_profiles] = override_get_profiles
app.dependency_overrides[liked] = override_fake_like
app.dependency_overrides[get_current_user] = override_get_fake_user


# @app.get('/')
# async def read_root():
#     return {"message": "Hello World"}

client = TestClient(app)

# def test_read_main():
#     response = client.get('/')
#     assert response.status_code == 200
#     assert response.json() == {"message": "Hello World"}


def test_profile_list():
    app.dependency_overrides[ProfileQueries] = NormalProfileQueries
    app.dependency_overrides[get_current_user] = override_get_fake_user
    r = client.get("/api/profiles")
    # d = r.json()

    assert r.status_code == 200

    app.dependency_overrides = {}


def test_like():
    app.dependency_overrides[ProfileQueries] = NormalProfileQueries
    app.dependency_overrides[get_current_user] = override_get_fake_user
    r = client.post("/api/profiles/1/liked")
    # d = r.json()

    assert r.status_code == 200

    app.dependency_overrides = {}
