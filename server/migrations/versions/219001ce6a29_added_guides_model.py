"""added guides model

Revision ID: 219001ce6a29
Revises: 317ebe7af42a
Create Date: 2023-10-06 11:39:19.048786

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '219001ce6a29'
down_revision = '317ebe7af42a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('guides',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('url', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('guides')
    # ### end Alembic commands ###
