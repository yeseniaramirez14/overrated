from datetime import date
from pydantic import BaseModel
from typing import List


class InterestedIn(BaseModel):
    interested: List[str] #list of individual preferences


class InterestedOut(BaseModel):
    id: int
    interested: List[str]
